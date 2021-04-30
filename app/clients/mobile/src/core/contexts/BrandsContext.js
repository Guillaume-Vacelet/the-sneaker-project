import React from 'react';
import { Image } from 'react-native';
import nikeLogo from '../../../assets/nike-logo.svg';
import adidasLogo from '../../../assets/adidas-logo.svg';
import newbalanceLogo from '../../../assets/new-balance-logo.svg';

const brands = [
  { title: 'Nike', logo: Image.resolveAssetSource(nikeLogo).uri },
  { title: 'Adidas', logo: Image.resolveAssetSource(adidasLogo).uri },
  { title: 'New Balance', logo: Image.resolveAssetSource(newbalanceLogo).uri },
]

const BrandsContext = React.createContext(brands);
export default BrandsContext;