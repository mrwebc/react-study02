import React from 'react'
import './App.css'
import NewHello01 from './NewHello01'
import NewHello02 from './NewHello02'
import NewHello03 from './NewHello03'
import NewHello04 from './NewHello04'
import NewHello from './NewHello'

function App(){
  return(
    <div>
      {/* 새로운 컴포넌트를 불러오는 코드를 작성 */}
      <NewHello01 />
      <NewHello02 />
      <NewHello03 />
      <NewHello04 />

      <hr />

      <NewHello name="도우너">집에서 왔어요.</NewHello>
      <NewHello name="또치">놀다가 왔어요.</NewHello>
      <NewHello name="고길동">회사에서 왔어요.</NewHello>
      <NewHello name="똘이장군">나쁜놈 잡으러 왔어요.</NewHello>

    </div>
  )
}

export default App