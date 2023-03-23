import * as React from 'react';

const ContestPreview: React.FC<{ contest: object }> = ({ contest }) => {
    // Specify the object types more when we finalize which database to use.
    return (
        <div className='contest-preview'>
            <div className='category'>
                {contest.categoryName}
                {/* {contest.name} */}
            </div>
            <div className='contest'>
                {contest.contestName}
                {/* {contest.race} */}
            </div>
        </div>
    );
};

export default ContestPreview;