import apiInstance from '@/services/apiInstance';
import { useParams } from 'next/navigation';
import * as React from 'react';

export default function ProductSlugPage() {
  const params = useParams();
  const [product, setProduct] = React.useState(null);
  const handleGetProductDetails = async () => {
    try {
      const response = apiInstance.get('/product/' + params.slug);
      console.log(response);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  return <div></div>;
}
