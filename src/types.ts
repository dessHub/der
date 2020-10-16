interface Args {
  category: string;
}

interface Categories {
  categories: Array<String>
}

interface Joke {
  id: any
  created_at: String
  icon_url: String
  updated_at: String
  url: String
  value: String
  categories: [String]
}
