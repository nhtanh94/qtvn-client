export const config = {
  // url : process.env.API_URL,
  firebase_config: {},
  BV: {
    NAME: 'bệnh viện quận 2',
    ID_SERVICE_INTEGRATED: '3c9a30b8-fbf7-4eb4-bbab-10f00f723b1b',
    HDKHAM: 'Vui lòng đến quầy đóng tiền trước giờ khám 15 phút',
    VERSION_RELEASE: '1.0.14',
    LINK_DOWNLOAD_ANDROID: 'market://details?id=youmed.bv.bvq2',
    SLUG: 'youmed-bv-quan2',
    NAME_SPECIALITY: 'Chuyên khoa',
    IS_FLOW_DOCTOR: true,
    ISSHOWDELETESPECIAL: false,
    ISSHOWMORESPECIAL: false,
    ISSHOWSTT: false,
    ISSHOWFEE: true,
    NAME_FEE: 'PHÍ KHÁM',
    ISSHOW_TOTALFEE: false,
    DEMO: {
      SLUG_DEMO: 'youmed-bv-quan2-demo',
      NAME: 'BV Quận 2 Demo',
    },
    SOLOGAN1: '',
    SOLOGAN2: 'Trao trọn niềm tin - Trao trọn trái tim',
    PHONE_CONTACT: '0938800078',
    EMAIL_CONTACT: 'district2hospital@gmail.com',
    flow: [
      {
        stt: 1,
        label: 'Khu khám',
        key: 'area',
      },
      {
        stt: 2,
        label: 'Thời gian khám',
        key: 'area',
        flowchild: [],
      },
      {
        stt: 3,
        label: 'Hồ sơ y tế',
        key: 'area',
      },
      {
        stt: 4,
        label: 'Xác nhận thông tin',
        key: 'area',
      },
      {
        stt: 5,
        label: 'Thanh toán',
        key: 'area',
      },
    ],
  },
  screen: {
    account: {
      commonQuestion: null,
    },
    defaultColor: '#52914f',
    area: true,
    selectArea: {
      titleHeader: 'Khu khám',
      apiV4: true,
    },
    billBookingDetail: {
      showSoTT: true,
      canCancel: true,
      showNoti: null,
    },
    listProviders: {
      titleHeader: 'Chọn khoa phòng',
      isFlowDoctor: true,
      fromProvider: false,
      isShowEventFee: false,
      withoutDoctor: false,
    },
    payment: {
      isPayoo: true,
      merchantId: '4262',
      secretKey:
        'Up7OE54xCvTqqxq3RDYXzUZ/LfOiME4phW6Nt4wMsU7NWltmMmJ3m5dGxhASiQZPbp12rIQmhOlP9q2Zt8i8hQ==',
    },
  },
};

export default config;
