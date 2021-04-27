import React from 'react';
import ErrorLayout from '../layouts/ErrorLayout';

export default function Custom500() {
  return <ErrorLayout>500 - Server-side error occurred</ErrorLayout>;
}
