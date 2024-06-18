import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useLoginRedirect = () => {
  const link = useSelector((state: RootState) => state.loginSlice.link);
  const router = useRouter();
  useEffect(() => {
    router.push(link);
  }, [link]);
};

export default useLoginRedirect;
