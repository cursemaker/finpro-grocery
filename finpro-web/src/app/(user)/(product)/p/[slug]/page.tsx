'use client'
import apiInstance from '@/services/apiInstance';
import { IProductDetails } from '@/types/products/product.type';
import { useParams } from 'next/navigation';
import * as React from 'react';

export default function ProductSlugPage() {
  const params = useParams();
  const [product, setProduct] = React.useState<IProductDetails | null>(null);
  const handleGetProductDetails = async () => {
    try {
      const response = await apiInstance.get('/product/' + params.slug);
      console.log(response.data.product);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  React.useEffect(() => {
    handleGetProductDetails();
  }, []);
  return <div></div>;
}
