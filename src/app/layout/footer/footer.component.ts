import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  LINK_SOCICAL = {
    itune: {
      img: 'https://cdn.youmed.vn/tin-tuc/wp-content/themes/amp/assets/images/appstore.svg',
      url: 'https://itunes.apple.com/gb/app/youmed/id1466077723?mt=8',
    },
    chplay: {
      img: 'https://cdn.youmed.vn/tin-tuc/wp-content/themes/amp/assets/images/android.svg',
      url: 'https://play.google.com/store/apps/details?id=com.youmed.info',
    },
    certificate: {
      img: 'https://cdn.youmed.vn/tin-tuc/wp-content/themes/amp/assets/images/HONConduct10870863_hr2.gif',
      url: 'https://www.healthonnet.org/HONcode/Conduct.html?HONConduct10870863',
    },
    ministry_of_industry: {
      img: 'https://cdn.youmed.vn/tin-tuc/wp-content/themes/amp/assets/images/bo-cong-thuong.svg',
      url: 'http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId53817',
    },
    DCMA: {
      img: 'https://images.dmca.com/Badges/dmca-badge-w200-2x1-02.png?ID=a74b3497-ddcd-4860-89c3-fce83c39f12a',
      url: 'https://www.dmca.com/Protection/Status.aspx?ID=a74b3497-ddcd-4860-89c3-fce83c39f12a&amp;refurl=https://youmed.vn/tin-tuc/',
    },
  };

  ngOnInit(): void {}
}
