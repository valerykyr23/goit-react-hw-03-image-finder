export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '28143013-44919de38ad9e5402793063fb',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });