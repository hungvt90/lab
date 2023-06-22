import { FC } from 'react';
import Container from '@mui/material/Container';
import { CloseIcon } from '@/app/assets/images/svg/icons';
import ViewDetailProduct from './ViewDetailProduct';
import ProductInfor from './ProductInfor';
import { Button, Box, Typography } from '@mui/material';
import CounterNumberProduct from '@/components/CounterNumberProduct';
import FilterType from '@/components/FilterType';
import ProductOptions from '@/components/ProductOptions';
import InputMessage from '@/components/InputMessage';
import clsx from 'clsx';
import styles from './styles.module.css';
interface ProductDetailModalProps {
  handleClose?: () => void;
}

const ProductDetailModal: FC<ProductDetailModalProps> = ({
  handleClose,
}: ProductDetailModalProps) => {
  return (
    <Container
      maxWidth="lg"
      className={clsx(
        'tw-bg-[#fff] tw-w-[70vw] tw-h-[70vh] tw-rounded-md tw-p-8 !tw-pr-0 tw-box-border tw-relative tw-flex tw-gap-10'
      )}
    >
      <Box
        className={clsx(
          'tw-bg-[#fff] tw-w-full tw-h-full tw-rounded-md tw-box-border tw-relative tw-flex tw-gap-10 tw-overflow-y-auto',
          styles.scrollBar
        )}
      >
        <CloseIcon
          onClick={handleClose}
          className="tw-absolute tw-top-0 tw-right-7 tw-cursor-pointer"
          fontSize={14}
        />
        <div className="tw-flex tw-gap-10">
          <ViewDetailProduct />
          <Box className="tw-box-border tw-pr-10">
            <ProductInfor />
            <FilterType filterType="Select weight" />
            <ProductOptions attributeTitle="Select flavor" />
            <InputMessage />
            <CounterNumberProduct />
            <Button
              variant="contained"
              className="tw-uppercase !tw-mt-6 !tw-px-[90px] !tw-py-[12.5px] tw-flex tw-items-center tw-justify-center !tw-font-[450] tw-overflow-hidden"
              sx={{
                '&:hover': {
                  backgroundColor: '#fff',
                  boxShadow: 'none',
                  outline: '2px solid var(--colorPrimary)',
                  color: 'var(--colorPrimary)',
                },
              }}
            >
              add to basket
            </Button>
            <Typography className="tw-font-[300] tw-text-sm tw-leading-[120%] !tw-mt-4">
              Egg Tart is available insets of 1
            </Typography>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default ProductDetailModal;
