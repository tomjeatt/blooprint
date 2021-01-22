interface IPagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
}

interface IResult {
  cover_image: string;
  id: number;
  master_id: number | null;
  master_url: string | null;
  resource_url: string;
  thumb: string;
  title: string;
  type: string;
  uri: string;
}

interface IRawData {
  pagination: Pagination;
  results: Result[];
}

interface IStat {
  in_collection: number;
  in_wantlist: number;
}

interface IStats {
  community: IStat;
  use: IStat;
}

interface IRelease {
  artist: string;
  format: string;
  id: number;
  label: string;
  resource_url: string;
  role: string;
  stats: IStats;
  status: string;
  thumb: string;
  title: string;
  type: string;
  year: number;
}
