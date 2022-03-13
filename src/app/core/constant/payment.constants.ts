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
    name: 'Ngân hàng Tiên Phong (TPBank)',
  },
  {
    icon: 'assets/images/bank/vietcombank_logo.webp',
    bankCode: 'VCB',
    name: 'Ngân hàng Ngoại thương (Vietcombank)',
  },
  {
    icon: 'assets/images/bank/abb_logo.webp',
    bankCode: 'ABB',
    name: 'Ngân hàng TMCP An Bình',
  },
  {
    icon: 'assets/images/bank/agribank_logo.webp',
    bankCode: 'AGB',
    name: 'Ngân hàng Nông nghiệp (Agribank)',
  },
  {
    icon: 'assets/images/bank/vietinbank_logo.webp',
    bankCode: 'VTB',
    name: 'Ngân hàng Công thương (Vietinbank)',
  },
  {
    icon: 'assets/images/bank/bidv_logo.webp',
    bankCode: 'BIDV',
    name: 'Ngân hàng đầu tư và phát triển Việt Nam (BIDV)',
  },
  {
    icon: 'assets/images/bank/eximbank_logo.webp',
    bankCode: 'EXB',
    name: 'Ngân hàng EximBank',
  },
  {
    icon: 'assets/images/bank/sacombank_logo.webp',
    bankCode: 'STB',
    name: 'Ngân hàng TMCP Sài Gòn Thương Tín (SacomBank)',
  },
  {
    icon: 'assets/images/bank/techcombank_logo.webp',
    bankCode: 'TCB',
    name: 'Ngân hàng Kỹ thương Việt Nam (TechcomBank)',
  },
  {
    icon: 'assets/images/bank/mbbank_logo.webp',
    bankCode: 'MB',
    name: 'Ngân hàng thương mại cổ phần Quân đội (MB Bank )',
  },
  {
    icon: 'assets/images/bank/hdbank_logo.webp',
    bankCode: 'HDB',
    name: 'Ngan hàng HDBank',
  },
  {
    icon: 'assets/images/bank/vpbank_logo.webp',
    bankCode: 'VPB',
    name: 'Ngân hàng Việt Nam Thịnh vượng (VPBank)',
  },
  {
    icon: 'assets/images/bank/vib_logo.webp',
    bankCode: 'VIBB',
    name: 'Ngân hàng Thương mại Cổ phần Quốc tế Việt Nam (Vietnam International Commercial Joint Stock Bank)',
  },
  {
    icon: 'assets/images/bank/msb.webp',
    bankCode: 'MTB',
    name: 'Ngân hàng Hàng Hải (MSBANK)',
  },
  {
    icon: 'assets/images/bank/namabank_logo.webp',
    bankCode: 'NAB',
    name: 'Ngân hàng Nam Á (NamABank)',
  },
  {
    icon: 'assets/images/bank/shb_logo.webp',
    bankCode: 'SHB',
    name: 'Ngân hàng TMCP Sài Gòn - Hà Nội',
  },
  {
    icon: 'assets/images/bank/vieta.webp',
    bankCode: 'VAB',
    name: 'Ngân hàng Thương mại Cổ phần Việt Á',
  },
  {
    icon: 'assets/images/bank/baca.webp',
    bankCode: 'BAB',
    name: 'Ngân hàng TMCP Bắc Á',
  },
  {
    icon: 'assets/images/bank/oceanbank_logo.webp',
    bankCode: 'OCB',
    name: 'Ngân hàng Đại Dương (OceanBank)',
  },
  {
    icon: 'assets/images/bank/sea.webp',
    bankCode: 'SEAB',
    name: 'Ngân hàng SeABank',
  },
  {
    icon: 'assets/images/bank/scb_logo.webp',
    bankCode: 'SCB',
    name: 'Ngân hàng Thương mại cổ phần Sài Gòn',
  },
  {
    icon: 'assets/images/bank/ncb.webp',
    bankCode: 'NCB',
    name: 'Ngân hàng Quốc dân (NCB)',
  },
  {
    icon: 'assets/images/bank/pvcombank_logo.webp',
    bankCode: 'PVCB',
    name: 'Ngân hàng TMCP Đại Chúng Việt Nam',
  },
  {
    icon: 'assets/images/bank/dongabank_logo.webp',
    bankCode: 'DAB',
    name: 'Ngân hàng DongA Bank',
  },
  {
    icon: 'assets/images/bank/saigonbank_logo.webp',
    bankCode: 'SGB',
    name: 'Ngân hàng thương mại cổ phần Sài Gòn Công Thương',
  },
];

export const PAYOO_VISA_DATA = [
  {
    icon: 'assets/images/bank/visa_logo.webp',
    bankCode: 'VISA',
    name: 'Thẻ Visa',
  },
  {
    icon: 'assets/images/bank/mastercard_logo.webp',
    bankCode: 'MASTER',
    name: 'Thẻ MasterCard',
  },
  {
    icon: 'assets/images/bank/jcb_logo.webp',
    bankCode: 'JCB',
    name: 'Thẻ JCB',
  },
];

export const LOGO_VNPAY = 'assets/images/payment/image_vnPay.webp';

export const MOMO_DATA = [
  {
    icon: 'assets/images/payment/logo-momo.webp',
    bankCode: 'MOMO',
    name: 'Cổng thanh toán momo',
  },
];

export const PAY_AT_STORE = [
  {
    icon: 'assets/images/payment/image_payatstore.webp',
    bankCode: 'PAY_AT_STORE',
    name: 'Tại cửa hàng',
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
    bankCode: 'Nhắn tin SMS',
    name: 'Nhắn tin SMS',
  },
];

export const PROVIDER_NAME = {
  FIREBASE: 'firebase',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  YOUMED: 'youmed',
};
