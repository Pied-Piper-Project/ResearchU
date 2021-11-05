import React from 'react';

function ResearchResult( {result} ){


  // ToDo: write function to display pay amount if it is paid

  // ToDo: write function to format timeRange
  return(
    <>
      <h1>{result.name}</h1>
      <h3>School {result.school}</h3>
      <img src={result.schoolLogo} alt={result.school + "'s school logo"} />
      <h3>Academic Department {result.department}</h3>
      <h3>Professor {result.professor}</h3>
      <h3>Location: {result.location}</h3>
      <h3>Semester: {result.semester}</h3>
      <h3>Duration: {result.dateRange}</h3>
      <h3>Research is conducted between the hours of {result.timeRange}</h3>
      <h3>This is {result.isPaid ? "a paid" : "not a paid"} research opportunity</h3>
      <h3>This opportunity pays ${result.payAmount}</h3>
      <p>{result.postBody}</p>
      <p>This opportunity is {result.isOnline ? "online" : "offline"}</p>
    </>
  )
}

export default ResearchResult;
