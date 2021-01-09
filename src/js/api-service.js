const apiService = {
  baseURL: 'https://pixabay.com/api/',
  key: '19734316-10978fed4d6ca650a445cb4b9',
  searchQuery: '',
  page: 1,

  fetchImages() {
    return fetch(
      `${this.baseURL}?key=${this.key}&q=${this.searchQuery}&image_type=illustration&orientation=horizontal&category=animals&page=${this.page}&per_page=10`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};

export default apiService;
