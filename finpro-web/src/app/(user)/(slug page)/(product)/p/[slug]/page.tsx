'use client';
import apiInstance from '@/services/apiInstance';
import { IProductDetails } from '@/types/products/product.type';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import * as React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { IoStorefrontOutline } from 'react-icons/io5';
import { MdDeliveryDining } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import AppsInfoComponent from './components/AppsInformation';

export default function ProductSlugPage() {
  const params = useParams();
  const [product, setProduct] = React.useState<IProductDetails | null>(null);
  const testDescription = {
    list: [
      'Tabung gas mini isi ulang dari HI-COOK',
      'Ramah lingkungan & tahan lama',
      'Aman & mudah digunakan',
      'Tersedia dalam kemasan kaleng isi 230 gr',
    ],
    product: 'HI-COOK Tabung Gas Mini',
    short:
      'Kegiatan masak-memasak menjadi lancar sesuai harapan karena kompor selalu mendapat suplai gas yang mencukupi berkat HI-COOK Tabung Gas Mini',
    long: 'merupakan tabung gas ukuran mini yang diciptakan khusus untuk memenuhi kebutuhan anda. Dapat untuk diaplikasikan pada kompor gas tipe mini atau alat-alat lainnya. Cocok untuk digunakan sebagai peralatan bekal memasak ketika aktivitas berkemah atau aktivitas di luar rumah lainnya. Mempunyai desain mini sehingga sangat praktis dibawa atau ditaruh dimanapun. HI-COOK Tabung Gas Mini sangat memenuhi kebutuhan anda.',
  };
  const handleGetProductDetails = async () => {
    try {
      const response = await apiInstance.get('/product/' + params.slug);
      console.log(response.data.product);
      setProduct(response.data.product);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  React.useEffect(() => {
    handleGetProductDetails();
  }, []);
  return (
    <div className='px-2 py-4 bg-white text-black'>
      <div className='flex justify-center mx-auto'>
        <CldImage width={400} height={400} src={product?.productImage[0].imageUrl ?? ''} alt={product?.name ?? ''} />
      </div>
      <div className='flex flex-col'>
        <h1 className='p-2 text-xl text-black'>{product?.name}</h1>
        <div className='flex flex-col gap-2 mx-4 p-2 rounded-md shadow-md'>
          <div className='flex items-center gap-2'>
            <IoStorefrontOutline className='text-2xl' />
            <p>{`Brand :`}</p>
            <Link href={'#'}>{`BRAND >`}</Link>
          </div>
          <div className='flex items-center gap-2'>
            <FaShippingFast className='text-2xl' />
            <p>Pengiriman Instan</p>
          </div>
        </div>
      </div>
      <div className='px-3'>
        <h1 className='text-2xl text-red-700 font-bold py-2'>
          {product?.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
        </h1>
      </div>
      <div className='px-3 flex items-center gap-2'>
        <div className='px-2 py-1 size-max rounded-md bg-amber-600 font-medium text-sm text-white'>{`6 %`}</div>
        <div className='text-xs text-gray-600 line-through'>
          {Number(28200).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
        </div>
      </div>
      <div className='px-3 my-6 border border-gray-200 w-full'></div>
      <div>
        <h1 className='font-semibold text-base my-3'>Deskripsi</h1>
        <div className='px-3 flex flex-col gap-2 text-gray-700 text-[15px]'>
          <ul>
            {testDescription.list.map((item, index) => (
              <li key={index} className='list-disc list-inside'>
                {item}
              </li>
            ))}
          </ul>
          <h3 className='font-semibold text-base'>{testDescription.product}</h3>
          <p>{testDescription.short}</p>
          <p>
            <p className='font-semibold inline mr-2'>{testDescription.product}</p>
            {testDescription.long}
          </p>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-semibold text-base my-3'>Pengiriman</h1>
        <div className='flex flex-col gap-2 mx-4 p-2 rounded-md shadow-md text-gray-600'>
          <div className='flex items-center gap-2'>
            <MdDeliveryDining className='text-2xl' />
            <p>{`Dikirim oleh `}</p>
            <Link className='font-semibold' href={'#'}>{`SAPA Instant Delivery`}</Link>
          </div>
          <div className='flex items-center gap-2'>
            <RiMoneyDollarCircleFill className='text-2xl' />
            <p>
              Biaya Pengiriman <b>Gratis</b>
            </p>
          </div>
        </div>
      </div>
      <AppsInfoComponent/>
    </div>
  );
}
