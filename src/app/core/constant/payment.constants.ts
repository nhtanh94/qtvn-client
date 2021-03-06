import { config } from './config.constants';

export const BV = config.BV;

export const PAYMENT_TYPE = {
  VNPAY: 'VNP',
  MOMO: 'MOMO',
  PAYOO: 'PAYOO',
  PAY_AT_STORE: 'PAY_AT_STORE',
  QR_CODE: 'QR_CODE',
  SMS: 'SMS',
  PAY_AT_SERVICE: 'PAY_AT_SERVICE',
};

export const PAYOO_SCHEMA = 'http://localhost:3000';

export const LIST_BANK_DATA = [
  {
    icon: 'assets/images/bank/vietcombank_logo.webp',
    bankCode: 'VIETCOMBANK',
  },
  {
    icon: 'assets/images/bank/vietinbank_logo.webp',
    bankCode: 'VIETINBANK',
  },
  {
    icon: 'assets/images/bank/bidv_logo.webp',
    bankCode: 'BIDV',
  },
  {
    icon: 'assets/images/bank/agribank_logo.webp',
    bankCode: 'AGRIBANK',
  },
  {
    icon: 'assets/images/bank/sacombank_logo.webp',
    bankCode: 'SACOMBANK',
  },
  {
    icon: 'assets/images/bank/techcombank_logo.webp',
    bankCode: 'TECHCOMBANK',
  },
  {
    icon: 'assets/images/bank/acb_logo2.webp',
    bankCode: 'ACB',
  },
  {
    icon: 'assets/images/bank/vpbank_logo.webp',
    bankCode: 'VPBANK',
  },
  {
    icon: 'assets/images/bank/dongabank_logo.webp',
    bankCode: 'DONGABANK',
  },
  {
    icon: 'assets/images/bank/eximbank_logo.webp',
    bankCode: 'EXIMBANK',
  },
  {
    icon: 'assets/images/bank/tpbank_logo.webp',
    bankCode: 'TPBANK',
  },
  {
    icon: 'assets/images/bank/ncb_logo.webp',
    bankCode: 'NCB',
  },
  {
    icon: 'assets/images/bank/oceanbank_logo.webp',
    bankCode: 'OJB',
  },
  {
    icon: 'assets/images/bank/msbank_logo.webp',
    bankCode: 'MSBANK',
  },
  {
    icon: 'assets/images/bank/hdbank_logo.webp',
    bankCode: 'HDBANK',
  },
  {
    icon: 'assets/images/bank/namabank_logo.webp',
    bankCode: 'NAMABANK',
  },
  {
    icon: 'assets/images/bank/ocb_logo.webp',
    bankCode: 'OCB',
  },
  {
    icon: 'assets/images/bank/scb_logo.webp',
    bankCode: 'SCB',
  },
  {
    icon: 'assets/images/bank/ivb_logo.webp',
    bankCode: 'IVB',
  },
  {
    icon: 'assets/images/bank/abb_logo.webp',
    bankCode: 'ABBANK',
  },
  {
    icon: 'assets/images/bank/mbbank_logo.webp',
    bankCode: 'MBBANK',
  },
  {
    icon: 'assets/images/bank/shb_logo.webp',
    bankCode: 'SHB',
  },
  {
    icon: 'assets/images/bank/vib_logo.webp',
    bankCode: 'VIB',
  },
  {
    icon: 'assets/images/bank/pvcombank_logo.webp',
    bankCode: 'PVCOMBANK',
  },
  {
    icon: 'assets/images/bank/saigonbank_logo.webp',
    bankCode: 'SAIGONBANK',
  },
];

export const LIST_VISA_DATA = [
  {
    icon: 'assets/images/bank/visa_logo.webp',
    bankCode: 'VISA',
  },
  {
    icon: 'assets/images/bank/mastercard_logo.webp',
    bankCode: 'MASTERCARD',
  },
  {
    icon: 'assets/images/bank/jcb_logo.webp',
    bankCode: 'JCB',
  },
  {
    icon: 'assets/images/bank/upi_logo.webp',
    bankCode: 'UPI',
  },
];

export const PAYOO_BANK_DATA = [
  {
    icon: 'assets/images/bank/tpbank_logo.webp',
    bankCode: 'TPB',
    name: 'Ng??n h??ng Ti??n Phong (TPBank)',
  },
  {
    icon: 'assets/images/bank/vietcombank_logo.webp',
    bankCode: 'VCB',
    name: 'Ng??n h??ng Ngo???i th????ng (Vietcombank)',
  },
  {
    icon: 'assets/images/bank/abb_logo.webp',
    bankCode: 'ABB',
    name: 'Ng??n h??ng TMCP An B??nh',
  },
  {
    icon: 'assets/images/bank/agribank_logo.webp',
    bankCode: 'AGB',
    name: 'Ng??n h??ng N??ng nghi???p (Agribank)',
  },
  {
    icon: 'assets/images/bank/vietinbank_logo.webp',
    bankCode: 'VTB',
    name: 'Ng??n h??ng C??ng th????ng (Vietinbank)',
  },
  {
    icon: 'assets/images/bank/bidv_logo.webp',
    bankCode: 'BIDV',
    name: 'Ng??n h??ng ?????u t?? v?? ph??t tri???n Vi???t Nam (BIDV)',
  },
  {
    icon: 'assets/images/bank/eximbank_logo.webp',
    bankCode: 'EXB',
    name: 'Ng??n h??ng EximBank',
  },
  {
    icon: 'assets/images/bank/sacombank_logo.webp',
    bankCode: 'STB',
    name: 'Ng??n h??ng TMCP S??i G??n Th????ng T??n (SacomBank)',
  },
  {
    icon: 'assets/images/bank/techcombank_logo.webp',
    bankCode: 'TCB',
    name: 'Ng??n h??ng K??? th????ng Vi???t Nam (TechcomBank)',
  },
  {
    icon: 'assets/images/bank/mbbank_logo.webp',
    bankCode: 'MB',
    name: 'Ng??n h??ng th????ng m???i c??? ph???n Qu??n ?????i (MB Bank )',
  },
  {
    icon: 'assets/images/bank/hdbank_logo.webp',
    bankCode: 'HDB',
    name: 'Ngan h??ng HDBank',
  },
  {
    icon: 'assets/images/bank/vpbank_logo.webp',
    bankCode: 'VPB',
    name: 'Ng??n h??ng Vi???t Nam Th???nh v?????ng (VPBank)',
  },
  {
    icon: 'assets/images/bank/vib_logo.webp',
    bankCode: 'VIBB',
    name: 'Ng??n h??ng Th????ng m???i C??? ph???n Qu???c t??? Vi???t Nam (Vietnam International Commercial Joint Stock Bank)',
  },
  {
    icon: 'assets/images/bank/msb.webp',
    bankCode: 'MTB',
    name: 'Ng??n h??ng H??ng H???i (MSBANK)',
  },
  {
    icon: 'assets/images/bank/namabank_logo.webp',
    bankCode: 'NAB',
    name: 'Ng??n h??ng Nam ?? (NamABank)',
  },
  {
    icon: 'assets/images/bank/shb_logo.webp',
    bankCode: 'SHB',
    name: 'Ng??n h??ng TMCP S??i G??n - H?? N???i',
  },
  {
    icon: 'assets/images/bank/vieta.webp',
    bankCode: 'VAB',
    name: 'Ng??n h??ng Th????ng m???i C??? ph???n Vi???t ??',
  },
  {
    icon: 'assets/images/bank/baca.webp',
    bankCode: 'BAB',
    name: 'Ng??n h??ng TMCP B???c ??',
  },
  {
    icon: 'assets/images/bank/oceanbank_logo.webp',
    bankCode: 'OCB',
    name: 'Ng??n h??ng ?????i D????ng (OceanBank)',
  },
  {
    icon: 'assets/images/bank/sea.webp',
    bankCode: 'SEAB',
    name: 'Ng??n h??ng SeABank',
  },
  {
    icon: 'assets/images/bank/scb_logo.webp',
    bankCode: 'SCB',
    name: 'Ng??n h??ng Th????ng m???i c??? ph???n S??i G??n',
  },
  {
    icon: 'assets/images/bank/ncb.webp',
    bankCode: 'NCB',
    name: 'Ng??n h??ng Qu???c d??n (NCB)',
  },
  {
    icon: 'assets/images/bank/pvcombank_logo.webp',
    bankCode: 'PVCB',
    name: 'Ng??n h??ng TMCP ?????i Ch??ng Vi???t Nam',
  },
  {
    icon: 'assets/images/bank/dongabank_logo.webp',
    bankCode: 'DAB',
    name: 'Ng??n h??ng DongA Bank',
  },
  {
    icon: 'assets/images/bank/saigonbank_logo.webp',
    bankCode: 'SGB',
    name: 'Ng??n h??ng th????ng m???i c??? ph???n S??i G??n C??ng Th????ng',
  },
];

export const PAYOO_VISA_DATA = [
  {
    icon: 'assets/images/bank/visa_logo.webp',
    bankCode: 'VISA',
    name: 'Th??? Visa',
  },
  {
    icon: 'assets/images/bank/mastercard_logo.webp',
    bankCode: 'MASTER',
    name: 'Th??? MasterCard',
  },
  {
    icon: 'assets/images/bank/jcb_logo.webp',
    bankCode: 'JCB',
    name: 'Th??? JCB',
  },
];

export const LOGO_VNPAY = 'assets/images/payment/image_vnPay.webp';

export const MOMO_DATA = [
  {
    icon: 'assets/images/payment/logo-momo.webp',
    bankCode: 'MOMO',
    name: 'C???ng thanh to??n momo',
  },
];

export const PAY_AT_STORE = [
  {
    icon: 'assets/images/payment/image_payatstore.webp',
    bankCode: 'PAY_AT_STORE',
    name: 'T???i c???a h??ng',
  },
];

export const QR_CODE = [
  {
    icon: 'assets/images/payment/image_qrcode.webp',
    bankCode: 'QR_CODE',
    name: 'QR CODE',
  },
];

export const SMS = [
  {
    icon: 'assets/images/payment/image_qrcode.webp',
    bankCode: 'Nh???n tin SMS',
    name: 'Nh???n tin SMS',
  },
];

export const PROVIDER_NAME = {
  FIREBASE: 'firebase',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  YOUMED: 'youmed',
};
