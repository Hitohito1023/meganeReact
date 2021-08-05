import React from 'react'
import { withRouter } from 'react-router'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { useSelector } from "react-redux";
import SwitchButton from './SwitchButton';

function ResultChart(props) {
  const results = useSelector(state => state.results.list)

  // 表示するデータを配列として定義
  const data = [
      {subject: 'ドライブ', A: 3, B: 20, fullMark: 20},
      {subject: 'アナライズ', A: 5, B: 2, fullMark: 20},
      {subject: 'クリエイト', A: 10, B: 3, fullMark: 20},
      {subject: 'ボランティア', A: 12, B: 5, fullMark: 20}
  ];

  return (
    <>
      <SwitchButton />
      <RadarChart  // レーダーチャート全体の設定を記述
          cx="50%" // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
          cy="50%"  // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
          outerRadius={150}  // レーダーチャート全体の大きさ
          width={600}  // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
          height={400}   // レーダーチャートが記載される高さ
          data={data}  // 表示対象のデータ
      >
          {/* レーダーチャートの蜘蛛の巣のような線 */}
          <PolarGrid />
          {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
          <PolarAngleAxis dataKey="subject" />

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
          <Radar name="過去" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />

          {/* グラフの下のAさんBさんの表記 */}
          <Legend />
          <Tooltip />
      </RadarChart>
    </>
  )
}

export default  withRouter(ResultChart);