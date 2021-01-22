interface IApplicationData {
  title: string;
  sets: Array<ISet>;
}

interface ISet {
  id: number;
  title: string;
  cards: Array<ICard>;
}

interface ICard {
  id: number;
  content: string;
}
