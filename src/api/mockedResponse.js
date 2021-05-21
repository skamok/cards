import { v1 as uuidv1 } from 'uuid';

export const mockedAccount = [
  {
    login: 'stas',
    psw: '123',
    info: {
      firstName: 'Stanislav',
      lastName: 'Karshankou',
      image: 'https://download-cs.net/steam/avatars/3149.jpg',
      alt: 'Captain Cat',
      description: 'Epam student'
    },
  },
  {
    login: 'yury',
    psw: '456',
    info: {
      firstName: 'Yury',
      lastName: 'Aniskou',
      image: 'https://media-exp1.licdn.com/dms/image/C5603AQGWub51k1fnlw/profile-displayphoto-shrink_200_200/0/1580910079577?e=1626307200&v=beta&t=C8H_VoabXeA7sLsRgVmU4yQGsrAbjE-s8goh1ncj3ow',
      alt: 'Epam frontend',
      description: 'Epam frontend developer'
    }
  }
]

export const mockedResponse = [
  {
    id: uuidv1(),
    title: 'Apple MacBook Pro',
    description: '13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors',
    price: 2000,
    imageUrl: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/AppleMacBookPro15-2018__1_.jpg'
  },
  {
    id: uuidv1(),
    title: 'Nokia 3310',
    description: 'The best phone of the world',
    price: 50,
    imageUrl: 'https://ixbt.online/live/images/original/00/00/14/2018/03/31/31109dca6a.jpg?w=877'
  },
  {
    id: uuidv1(),
    title: 'Videocard NVidia RTX 3090',
    description: 'Buy and start maining!',
    price: 9999,
    imageUrl: 'https://3dnews.ru/assets/external/illustrations/2020/10/12/1022750/3090_back.jpg'
  },
  {
    id: uuidv1(),
    title: 'Cat',
    description: 'Cat from hell. Not return.',
    price: 666,
    imageUrl: 'https://i.imgflip.com/1cvnv2.jpg'
  },
  {
    id: uuidv1(),
    title: 'Ford Mustang',
    description: 'Shelby GT 500 V8 5.2 760hp 3.4s. Dream is avalible.',
    price: 74000,
    imageUrl: 'https://images.drive.ru/i/0/5d4842b7ec05c4660c000003.jpg'
  },
  {
    id: uuidv1(),
    title: 'PS 5',
    description: 'PlayStation 5. Play Has No Limitsю. Try to find and buy me.',
    price: 500,
    imageUrl: 'https://www.belconsole.by/pics/items/ps5.jpg'
  }
]
