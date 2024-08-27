import Level1 from '../../assets/images/0.png'
import Level2 from '../../assets/images/1.png'
import Level3 from '../../assets/images/2.png'
import Level4 from '../../assets/images/3.png'
import Level5 from '../../assets/images/4.png'
import Level6 from '../../assets/images/5.png'
import Level7 from '../../assets/images/6.png'

function HangMan({ step }){
  const images = [Level1, Level2, Level3, Level4, Level5, Level6 , Level7];
  return (
    <div className='flex justify-end w-[400px] h-[400px]' style={{marginRight: '5px'}}>
      <img src={step >= images.length ? images[images.length - 1] : images[step]} />
    </div>
  )

}

export default HangMan;