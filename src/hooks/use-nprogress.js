import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

export function useNProgress() {
  const location = useLocation();

  useEffect(() => {
    nProgress.configure({ showSpinner: false }); // Hide the spinner
    nProgress.start();
    nProgress.done();
    return () => {
      nProgress.done();
    };
  }, [location]);
}
