import { Request, Response, NextFunction } from "express";
import { prisma } from "../../prisma";
import { transporter } from "../../utils/transporter.mailer";
import jwt from "jsonwebtoken";
import { hashPassword } from "../../utils/hash.password";

const RESET_SECRET = process.env.JWT_SECRET || "supersecret";

export const requestResetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email wajib diisi" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(404).json({ success: false, message: "User tidak ditemukan" });

    // Buat token (expired 10 menit)
    const token = jwt.sign({ email }, RESET_SECRET, { expiresIn: "10m" });

    const resetLink = `${process.env.API_URL}/api/user/confirm-reset-password?email=${email}&token=${token}`;

    await transporter.sendMail({
      to: email,
      subject: "Reset Password Anda",
      html: `
        <p>Halo,</p>
        <p>Klik tombol di bawah untuk mereset password Anda:</p>
        <a href="${resetLink}" style="padding: 10px 20px; background: #f97316; color: white; text-decoration: none;">Reset Password</a>
        <p>Link ini berlaku selama 10 menit.</p>
      `,
    });

    // Tambah hitung reset
    await prisma.user.update({
      where: { email },
      data: {
        passwordResetCount: {
          increment: 1,
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Link reset password berhasil dikirim ke email Anda.",
    });
  } catch (err) {
    next(err);
  }
};
