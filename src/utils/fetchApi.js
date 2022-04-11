const API = 'https://api.themoviedb.org/3';

export function fetchApi(path) {
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzczNmQ2NTA4NmJkZGY0MjIwMzY3M2NmMjdkNDE5YyIsInN1YiI6IjYyNTFmZDA3OGE4NGQyMzU1YTczNjU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hr0OFbU_1qaM1U2U8WqXKjQQvcrnmaUUt8jYpF_dgMo",
      "Content-Type": "application/json;charset=utf-8"
    },
  })
    .then((result) => result.json())
} 