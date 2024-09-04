import'./HeadComponent.css'

function HeadComponent(){
    return(
        <div id='toggle'>
        <h1 className='pricing-title'>Our Pricing</h1>
        <span className='spa'>Annually</span>
         <label class="switch">
         <input type="checkbox" name='toggle' id='toggle'></input>
         <span class="slider round"></span>
         </label>
          <span className='spa'>Monthly</span>
      </div>
    )
}
export default HeadComponent