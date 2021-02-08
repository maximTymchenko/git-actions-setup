import React, { FC, useEffect } from 'react';

const TypeForm: FC = () => {
    useEffect(() => {
        (function () {
            let qs,
                js,
                q,
                s,
                d = document,
                gi = d.getElementById,
                ce = d.createElement,
                gt = d.getElementsByTagName,
                id = 'typef_orm',
                b = 'https://embed.typeform.com/';
            if (!gi.call(d, id)) {
                js = ce.call(d, 'script');
                js.id = id;
                js.src = b + 'embed.js';
                q = gt.call(d, 'script')[0];
                q.parentNode.insertBefore(js, q);
            }
        })();
    });

    return (
        <div
            data-testid="type-form"
            className="typeform-widget"
            data-url="https://form.typeform.com/to/dJ3UTlui?typeform-medium=embed-snippet"
            style={{ width: '100%', height: '500px' }}
        ></div>
    );
};

export default TypeForm;
