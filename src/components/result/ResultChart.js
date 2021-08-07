import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import SwitchButton from './SwitchButton';
import { useDispatch } from 'react-redux'
import { updateResult } from '../../action/actions'

function ResultChart({resultList}) {
  const results = resultList;
  const dispatch = useDispatch();

  dispatch(updateResult(results))

  const a = results.length - 1;

  const [showData, setShowData] = useState(a)

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

  // 表示するデータを配列として定義
  // const data = [
  //     {subject: 'ドライブ', A: 3, B: 20, fullMark: 20},
  //     {subject: 'アナライズ', A: 5, B: 2, fullMark: 20},
  //     {subject: 'クリエイト', A: 10, B: 3, fullMark: 20},
  //     {subject: 'ボランティア', A: 12, B: 5, fullMark: 20}
  // ];

  // const data = [
  //     {subject: 'ドライブ', A: newData.drive, B: 20, fullMark: 20},
  //     {subject: 'アナライズ', A: newData.analyze, B: 2, fullMark: 20},
  //     {subject: 'クリエイト', A: newData.create, B: 3, fullMark: 20},
  //     {subject: 'ボランティア', A: newData.volunteer, B: 5, fullMark: 20}
  // ];

    const data = [
      {type: 'ドライブ', A: newData.drive, B: pastData.drive, fullMark: 20},
      {type: 'アナライズ', A: newData.analyze, B: pastData.analyze, fullMark: 20},
      {type: 'クリエイト', A: newData.create, B: pastData.create, fullMark: 20},
      {type: 'ボランティア', A: newData.volunteer, B: pastData.volunteer, fullMark: 20}
  ];

  return (
    <>
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
                stroke="#8884d8"  // レーダーの外枠の色
                fill="#8884d8"  // レーダー内の色
                fillOpacity={0.6}  // レーダー内の色の濃さ(1にすると濃さMAX)
            />
            {/* ２個目のレーダー */}
            <Radar name="過去" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />

            {/* グラフの下のA,Bの表記 */}
            <Legend />
            <Tooltip />
        </RadarChart>
      </div>
    </>
  )
}

export default  withRouter(ResultChart);