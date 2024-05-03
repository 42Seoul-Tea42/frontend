import { Fancy } from './redux/interface/enum';

export const usersInquirySetDummy = [
  {
    identity: {
      id: '1',
      firstname: '재준',
      lastname: '김'
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 5,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.NONE,
      distance: 10
    },
    ageGender: {
      age: 25,
      gender: ''
    },
    photo: {
      mainPhoto: '/emoji/3.jpg'
    }
  },
  {
    identity: {
      id: '2',
      firstname: '주현',
      lastname: '오'
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 4,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.SEND,
      distance: 1
    },
    ageGender: {
      age: 100,
      gender: ''
    },
    photo: {
      mainPhoto: '/emoji/7.jpg'
    }
  },
  {
    identity: {
      id: '3',
      firstname: '경민',
      lastname: '김'
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 3,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.RECV,
      distance: 20
    },
    ageGender: {
      age: 30,
      gender: ''
    },
    photo: {
      mainPhoto: '/emoji/4.jpg'
    }
  },
  {
    identity: {
      id: '4',
      firstname: '준형',
      lastname: '박'
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 4,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.CONN,
      distance: 12
    },
    ageGender: {
      age: 32,
      gender: ''
    },
    photo: {
      mainPhoto: '/emoji/8.jpg'
    }
  },
  {
    identity: {
      id: '5',
      firstname: '현준',
      lastname: '김'
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 5,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.SEND,
      distance: 24
    },
    ageGender: {
      age: 26,
      gender: ''
    },
    photo: {
      mainPhoto: '/emoji/6.jpg'
    }
  },
  {
    identity: {
      id: '5',
      firstname: '순형',
      lastname: '권'
    },
    profile: {
      subPhotos: [],
      interests: [],
      rating: 5,
      sexualPreference: '',
      introduction: ''
    },
    another: {
      fancy: Fancy.SEND,
      distance: 60
    },
    ageGender: {
      age: 28,
      gender: ''
    },
    photo: {
      mainPhoto: '/emoji/9.jpg'
    }
  }
];
