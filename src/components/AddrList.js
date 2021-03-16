import React from "react";
import "./AddrList.scss";

const ListItem = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <tr key={item.bdMgtSn + ""}>
          <td>
            <div className="road">{item.roadAddr}</div>
            <div className="jibun">{item.jibunAddr}</div>
          </td>
          <td>{item.engAddr}</td>
          <td>{item.zipNo}</td>
        </tr>
      ))}
    </>
  );
};

function AddrList({ list }) {
  return (
    <>
      <div className="tableWrap">
        {!list.length ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          <table className="addrlink">
            <thead>
              <tr>
                <th>한글 주소</th>
                <th>영문 주소</th>
                <th>우편번호</th>
              </tr>
            </thead>
            <tbody>
              <ListItem list={list} />
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default React.memo(AddrList);
