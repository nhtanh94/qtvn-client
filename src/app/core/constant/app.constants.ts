export const PLATFORM = {
  WEB: 'web',
  LANDING_PAGE: 'langdingpage',
};

export const PAYMENT_PLATFORM = {
  WEB: 'WEB',
  APP: 'APP',
};
export const YouMedConstants: any = {
  serviceType: {
    doctor: 'doctor',
    hospital: 'hospital',
    clinic: 'clinic',
    dentistry: 'dentistry',
    surgery: 'beautysalon',
    speciality: 'speciality',
  },
  defaultValue: {
    doctorAvatar:
      'https://youmed.vn/photos/51e51c62-3880-4206-8558-0759f52f8089.png',
  },
  dateFormat: 'dd/MM/yyyy',
  timeFormat: 'HH:mm',
  ORDER_STATUS: {
    CREATED: 'created',
    CONFIRMED: 'confirmed',
    FAILED: 'failed',
  },
  STORE_LINK: {
    android: 'https://play.google.com/store/apps/details?id=com.youmed.info',
    ios: 'https://itunes.apple.com/gb/app/youmed/id1466077723?mt=8',
  },
  WEEK_SCHEDULE_STATUS: {
    DRAFTING: 'DRAFTING',
    DRAFTED: 'DRAFTED',
    PLANNING: 'PLANNING',
    PLANNED: 'PLANNED',
    PLAN_FAILED: 'PLAN_FAILED',
  },
  REFUND_STATUS: {
    UNCONFIRMED: 'Chưa thanh toán',
    CREATED: 'Chưa thanh toán',
    ARRIVED: 'Đã khám',
    CONFIRMED: 'Đã thanh toán',
    FAILED: 'Thanh toán lỗi',
    REFUNDED: 'Đã hoàn tiền',
    CANCELLED: 'Đã hủy',
    CANCEL_REQUESTED: 'Đã yêu cầu hủy',
    REFUND_SUBMITTED: 'Đã gửi yêu cầu hoàn tiền',
    REFUND_FAILED: 'Hoàn tiền lỗi',
    REFUND_SUBMIT_FAILED: 'Gửi yêu cầu hoàn tiền lỗi',
    PAYMENT_REQUESTED: 'Đang Thanh toán',
    PLACED: 'Đã đặt lịch',
    WAIT_FOR_PLACING: 'Đợi xác nhận',
  },
  TYPE_PAYMENT: {
    APPOINTMENT: 'Thanh toán đặt khám',
    BILLING: 'Thanh toán viện phí',
    PRESCRIPTION: 'Thanh toán cận lâm sàng',
  },
  COLOR_STATUS: {
    UNCONFIRMED: '#34B41F',
    ARRIVED: '#1A76E3',
    FAILED: '#959595',
    REFUNDED: '#34B41F',
    CANCEL_REQUESTED: '#34B41F',
    REFUND_SUBMITTED: '#34B41F',
    REFUND_FAILED: '#34B41F',
    REFUND_SUBMIT_FAILED: '#34B41F',
    WAIT_FOR_PLACING: '#34B41F',
    CONFIRMED: '#34B41F',
    CREATED: '#d5d5d7',
    PAYMENT_REQUESTED: '#233dff',
    CANCELLED: '#DD4C1E',
    PLACED: '#34B41F',
  },
  REFUND_TYPE: {
    APPOINTMENT: 'Lịch khám',
    PRESCRIPTION: 'Cận lâm sàng',
    BILLING: 'Viện phí',
  },
};

export const YouMedConstantsType = {
  serviceType: [
    {
      value: 'Bác sĩ',
      type: 'doctor',
      slug: '/chi-tiet-bac-si',
    },
    {
      value: 'Bệnh viện',
      type: 'hospital',
      slug: '/chi-tiet-benh-vien',
    },
    {
      value: 'Phòng khám',
      type: 'clinic',
      slug: '/chi-tiet-phong-kham',
    },
    {
      value: 'Nha khoa',
      type: 'dentistry',
      slug: '/chi-tiet-nha-khoa',
    },
    {
      value: 'Thẩm mỹ viện',
      type: 'beautysalon',
      slug: '/chi-tiet-tham-my-vien',
    },
  ],
};

export const ngxEditorConfig = {
  editable: true,
  spellcheck: false,
  height: 'auto',
  minHeight: '10rem',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Nhập nội dung...',
  imageEndPoint: '',
  toolbar: [
    ['bold', 'italic', 'underline', 'superscript', 'subscript'],
    [
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull',
      'indent',
      'outdent',
    ],
    ['paragraph', 'orderedList', 'unorderedList', 'link'],
  ],
};

export const DEFAULT_VALUE = {
  BANNER_NEWS:
    'https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2019/10/youmed-yhc-team-2.jpg',
};

export const NATIONS = [
  {
    id: 'id1',
    name: 'Kinh (Việt)',
  },
  {
    id: 'id2',
    name: 'Tày',
  },
  {
    id: 'id3',
    name: 'Thái',
  },
  {
    id: 'id4',
    name: 'Mường',
  },
  {
    id: 'id5',
    name: 'Hoa (Hán)',
  },
  {
    id: 'id6',
    name: 'Khmer',
  },
  {
    id: 'id7',
    name: 'Nùng',
  },
  {
    id: 'id8',
    name: 'HMông (Mèo)',
  },
  {
    id: 'id9',
    name: 'Dao',
  },
  {
    id: 'id10',
    name: 'Gia-rai',
  },
  {
    id: 'id11',
    name: 'Ê-đê',
  },
  {
    id: 'id12',
    name: 'Ba-na',
  },
  {
    id: 'id13',
    name: 'Sán Chay(Cao lan - Sán chỉ)',
  },
  {
    id: 'id14',
    name: 'Chăm (chàm)',
  },
  {
    id: 'id15',
    name: 'Xê-đăng',
  },
  {
    id: 'id16',
    name: 'Sán Dìu',
  },
  {
    id: 'id17',
    name: 'Hrê',
  },
  {
    id: 'id18',
    name: 'Cơ-ho',
  },
  {
    id: 'id19',
    name: 'Ra Glay',
  },
  {
    id: 'id20',
    name: "M'Nông",
  },
  {
    id: 'id21',
    name: 'Thổ',
  },
  {
    id: 'id22',
    name: 'Xtiêng',
  },
  {
    id: 'id23',
    name: 'Khơ Mú',
  },
  {
    id: 'id24',
    name: 'Bru-Vân Kiều',
  },
  {
    id: 'id25',
    name: 'Giáy',
  },
  {
    id: 'id26',
    name: 'Cơ tu',
  },
  {
    id: 'id27',
    name: 'Gié-Triêng',
  },
  {
    id: 'id28',
    name: 'Ta Ôi',
  },
  {
    id: 'id29',
    name: 'Mạ',
  },
  {
    id: 'id30',
    name: 'Co',
  },
  {
    id: 'id31',
    name: 'Chơ Ro',
  },
  {
    id: 'id32',
    name: 'Hà Nhì',
  },
  {
    id: 'id33',
    name: 'Xinh Mun',
  },
  {
    id: 'id34',
    name: 'Chu-ru',
  },
  {
    id: 'id35',
    name: 'Lào',
  },
  {
    id: 'id36',
    name: 'La Chí',
  },
  {
    id: 'id37',
    name: 'Phù Lá',
  },
  {
    id: 'id38',
    name: 'La Hủ',
  },
  {
    id: 'id39',
    name: 'Kháng',
  },
  {
    id: 'id40',
    name: 'Lự',
  },
  {
    id: 'id41',
    name: 'Pà Thẻn',
  },
  {
    id: 'id42',
    name: 'Lô Lô',
  },
  {
    id: 'id43',
    name: 'Chứt',
  },
  {
    id: 'id44',
    name: 'Mảng',
  },
  {
    id: 'id45',
    name: 'Cờ lao',
  },
  {
    id: 'id46',
    name: 'Bố Y',
  },
  {
    id: 'id47',
    name: 'La Ha',
  },
  {
    id: 'id48',
    name: 'Cống',
  },
  {
    id: 'id49',
    name: 'Ngái',
  },
  {
    id: 'id50',
    name: 'Si La',
  },
  {
    id: 'id51',
    name: 'Pu Péo',
  },
  {
    id: 'id52',
    name: 'Brâu',
  },
  {
    id: 'id53',
    name: 'Rơ Măm',
  },
  {
    id: 'id54',
    name: 'Ơ Đu',
  },
];
