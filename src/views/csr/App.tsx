import * as React from 'react';
import {Layout} from './layout';

//
export function Csr() { 
    return (
    <Layout>
        <div>
            <h1>CSR</h1>
            <hr />
            <div id="root"></div>
            {/* JS */}
            <script type="text/babel" src="/js/csr.js"></script>
        </div>
    </Layout>
    );
}

