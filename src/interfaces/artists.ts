export interface IArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: 0;
  };
  genres: string[];
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: 300;
      width: 300;
    }
  ];
  name: string;
  popularity: 0;
  type: string;
  uri: string;
}
