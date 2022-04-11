import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Stars({ raiting }) {
  const StarOne = () => {
    return (
      <div>
        <AiFillStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
      </div>
    )
  }

  const StarTwo = () => {
    return (
      <div>
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
      </div>
    )
  }

  const StarThree = () => {
    return (
      <div>
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
      </div>
    )
  }

  const StarFour = () => {
    return (
      <div>
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
      </div>
    )
  }

  const StarFive = () => {
    return (
      <div>
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiFillStar color='#ffe174' />
        <AiOutlineStar color='#ffe174' />
      </div>
    )
  }

  if (raiting >= 5 && raiting < 6) {
    return <StarOne />
  } else if (raiting >= 6 && raiting < 7) {
    return <StarTwo />
  } else if (raiting >= 7 && raiting < 8) {
    return <StarThree />
  } else if (raiting >= 8 && raiting < 9) {
    return <StarFour />
  } else if (raiting >= 9 && raiting < 10) {
    return <StarFive />
  }
}