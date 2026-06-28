import { getImgPath } from '@/utils/pathUtils';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/logo-1.png")}
        alt="logo"
        width={160}
        height={160}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/logo-2.png")}
        alt="logo"
        width={160}
        height={160}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;