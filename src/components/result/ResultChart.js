import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import SwitchButton from './SwitchButton';
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../../action/actions'

function ResultChart({resultList}) {
  const results = resultList;
  const dispatch = useDispatch();

  dispatch(updateResult(results))

  // const results = useSelector(state => state.results.list);

  const a = results.length - 1;

  const [showData, setShowData] = useState(a);

  const type = (results) => {
  　var t = []
    if(results[a].driveFlag){
      t.push("ドライブ")
    } 
    if(results[a].analyzeFlag){
      t.push("アナライズ")
    }
    if(results[a].createFlg){
      t.push("クリエイト")
    }
    if(results[a].volunteerFlg){
      t.push("ボランティア")
    } 
    return t.join("/")
  }

  console.log(type(results))
  

  const setPrevResult = () => {
    if((showData) > 0)
    setShowData( showData - 1)
  }

  const setNextResult = () => {
    if((showData) < a )
    setShowData( showData + 1)
  }

  const newData = {
    drive: results[a].driveType,
    analyze: results[a].analyzeType,
    create: results[a].createType,
    volunteer: results[a].volunteerType
  }

  const pastData = {
    drive: results[showData].driveType,
    analyze: results[showData].analyzeType,
    create: results[showData].createType,
    volunteer: results[showData].volunteerType
  }

  const date = results[showData].createdDate.slice(0, 10).replace(/-/g, '/')

  // 表示するデータを配列として定義
  const data = [
    {type: 'ドライブ', A: newData.drive, B: pastData.drive, fullMark: 20},
    {type: 'アナライズ', A: newData.analyze, B: pastData.analyze, fullMark: 20},
    {type: 'クリエイト', A: newData.create, B: pastData.create, fullMark: 20},
    {type: 'ボランティア', A: newData.volunteer, B: pastData.volunteer, fullMark: 20}
  ];

  return (
    <>
      <div className="text-center my-5">
        <h2>現在の{results[0].user.name}さんは、{type(results)}タイプ です</h2>
      </div>
      <SwitchButton setPrevResult={setPrevResult} setNextResult={setNextResult} showData={showData}/>
      <div className="result-chart">
        <RadarChart  // レーダーチャート全体の設定を記述
            cx="50%" // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
            cy="50%"  // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
            outerRadius={200}  // レーダーチャート全体の大きさ
            width={650}  // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
            height={500}   // レーダーチャートが記載される高さ
            data={data}  // 表示対象のデータ
        >
            {/* レーダーチャートの蜘蛛の巣のような線 */}
            <PolarGrid />
            {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
            <PolarAngleAxis dataKey="type" />

            {/* 目安となる数値が表示される線を指定  */}
            <PolarRadiusAxis
                angle={90}  // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
                domain={[0, 20]}  // リストの１番目の要素が最小値、2番目の要素が最大値
            />

            {/* レーダーを表示 */}
            <Radar
                name="最新"  // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
                dataKey="A"   // 表示する値と対応するdata内のキー
                stroke="#FF9503"  // レーダーの外枠の色
                fill="#FFC612"  // レーダー内の色
                fillOpacity={0.8}  // レーダー内の色の濃さ(1にすると濃さMAX)
            />
            {/* ２個目のレーダー */}
            <Radar name={date} dataKey="B" stroke="#00CFF0" fill="#00E3F0" fillOpacity={0.2} />

            {/* グラフの下のA,Bの表記 */}
            <Legend />
            <Tooltip />
        </RadarChart>
      </div>
    </>
  )
}

export default  withRouter(ResultChart);