import * as React from 'react';

export const Root = ({ name = 'test' } : {name?: string}) => (
    <div>
        <div>{name}</div>
    </div>
);