import{S as ne,i as re,s as ie,k as d,q as p,a as $,y as G,l as u,m,r as f,h as r,c as w,z as L,n as l,b as g,J as s,A as M,g as H,d as V,B as X,K as U}from"../chunks/index.28fec676.js";import{C as x}from"../chunks/ContentCard.a35e90ab.js";function le(b){let e,i,n;return{c(){e=d("b"),i=p("Retriever"),n=p(` is an application I made to help the team write and submit reports
    and patent disclosures. It has a Svelte frontend and Django backend, but the
    most interesting part is that it uses pandoc to convert from markdown (which
    the team does like using) into LaTeX templates that match required designs by
    the org. The upshot of this is that adoption is much higher than similar LaTeX
    attempts and people actively prefer to use the tool over Word.`)},l(t){e=u(t,"B",{});var o=m(e);i=f(o,"Retriever"),o.forEach(r),n=f(t,` is an application I made to help the team write and submit reports
    and patent disclosures. It has a Svelte frontend and Django backend, but the
    most interesting part is that it uses pandoc to convert from markdown (which
    the team does like using) into LaTeX templates that match required designs by
    the org. The upshot of this is that adoption is much higher than similar LaTeX
    attempts and people actively prefer to use the tool over Word.`)},m(t,o){g(t,e,o),s(e,i),g(t,n,o)},p:U,d(t){t&&r(e),t&&r(n)}}}function he(b){let e,i,n,t,o,_;return{c(){e=d("b"),i=p("Springerdoodle"),n=p(` was a prototype application I made in Elm and Flask
    back in 2019 to manage access to remote machines. Noting that the default
    behavior of developers was to use username/password, this application took
    care of the mechanics of key transfer and setting up the ssh config. That
    prototype is associated with the patent
    `),t=d("a"),o=p("US11489824B2"),_=p("."),this.h()},l(c){e=u(c,"B",{});var y=m(e);i=f(y,"Springerdoodle"),y.forEach(r),n=f(c,` was a prototype application I made in Elm and Flask
    back in 2019 to manage access to remote machines. Noting that the default
    behavior of developers was to use username/password, this application took
    care of the mechanics of key transfer and setting up the ssh config. That
    prototype is associated with the patent
    `),t=u(c,"A",{href:!0,target:!0,rel:!0,class:!0});var W=m(t);o=f(W,"US11489824B2"),W.forEach(r),_=f(c,"."),this.h()},h(){l(t,"href","https://patents.google.com/patent/US11489824B2/en?inventor=Seth+Jacob+Rothschild"),l(t,"target","_blank"),l(t,"rel","noopener noreferrer"),l(t,"class","svelte-tb01rb")},m(c,y){g(c,e,y),s(e,i),g(c,n,y),g(c,t,y),s(t,o),g(c,_,y)},p:U,d(c){c&&r(e),c&&r(n),c&&r(t),c&&r(_)}}}function ce(b){let e,i,n;return{c(){e=d("a"),i=p("Goban IRL"),n=p(`
    This is an app that uses a webcam to track the state of a Go board using OpenCV.
    While I've seen a lot of sophisticated strategies for detecting stones with image
    recognition, the strategy here is to just use the color differential between
    black and white stones which is sufficient, cheap, and fast. As a proof of concept
    I was able to use this library to copy games between a physical board to a computer,
    but also between two computer boards.`),this.h()},l(t){e=u(t,"A",{href:!0,target:!0,rel:!0,class:!0});var o=m(e);i=f(o,"Goban IRL"),o.forEach(r),n=f(t,`
    This is an app that uses a webcam to track the state of a Go board using OpenCV.
    While I've seen a lot of sophisticated strategies for detecting stones with image
    recognition, the strategy here is to just use the color differential between
    black and white stones which is sufficient, cheap, and fast. As a proof of concept
    I was able to use this library to copy games between a physical board to a computer,
    but also between two computer boards.`),this.h()},h(){l(e,"href","https://github.com/Seth-Rothschild/goban_irl"),l(e,"target","_blank"),l(e,"rel","noopener noreferrer"),l(e,"class","svelte-tb01rb")},m(t,o){g(t,e,o),s(e,i),g(t,n,o)},p:U,d(t){t&&r(e),t&&r(n)}}}function pe(b){let e,i,n;return{c(){e=d("a"),i=p("Player Pyano"),n=p(`
    At home I'm housesitting a 1989 Yamaha Disklavier grand piano, which takes in
    floppy disks of MIDI and plays the song using solenoids built into the piano.
    Thankfully, MIDI hasn't really changed in the last 30 years. This is a webapp
    that I run on a raspberry pi to quickly create a playlist and send songs to the
    piano. The software also does adjustments to note velocity to account for the
    physical state of the piano.`),this.h()},l(t){e=u(t,"A",{href:!0,target:!0,rel:!0,class:!0});var o=m(e);i=f(o,"Player Pyano"),o.forEach(r),n=f(t,`
    At home I'm housesitting a 1989 Yamaha Disklavier grand piano, which takes in
    floppy disks of MIDI and plays the song using solenoids built into the piano.
    Thankfully, MIDI hasn't really changed in the last 30 years. This is a webapp
    that I run on a raspberry pi to quickly create a playlist and send songs to the
    piano. The software also does adjustments to note velocity to account for the
    physical state of the piano.`),this.h()},h(){l(e,"href","https://github.com/Seth-Rothschild/player_pyano"),l(e,"target","_blank"),l(e,"rel","noopener noreferrer"),l(e,"class","svelte-tb01rb")},m(t,o){g(t,e,o),s(e,i),g(t,n,o)},p:U,d(t){t&&r(e),t&&r(n)}}}function fe(b){let e,i,n;return{c(){e=d("a"),i=p("Wordle Strategy Evaluation"),n=p(`
    When everyone was playing Wordle, there was some speculation on what the optimal
    strategy would be. To quickly test out varying strategies I threw together a
    quick TDD Wordle implementation in Python to test a given strategy against the
    full word list. The oft-proposed strategy to select words by how often a letter
    appears in a particular position only scores an average of 3.81 guesses across
    the word set.`),this.h()},l(t){e=u(t,"A",{href:!0,target:!0,rel:!0,class:!0});var o=m(e);i=f(o,"Wordle Strategy Evaluation"),o.forEach(r),n=f(t,`
    When everyone was playing Wordle, there was some speculation on what the optimal
    strategy would be. To quickly test out varying strategies I threw together a
    quick TDD Wordle implementation in Python to test a given strategy against the
    full word list. The oft-proposed strategy to select words by how often a letter
    appears in a particular position only scores an average of 3.81 guesses across
    the word set.`),this.h()},h(){l(e,"href","https://github.com/Seth-Rothschild/wordle_strategy_evaluation"),l(e,"target","_blank"),l(e,"rel","noopener noreferrer"),l(e,"class","svelte-tb01rb")},m(t,o){g(t,e,o),s(e,i),g(t,n,o)},p:U,d(t){t&&r(e),t&&r(n)}}}function de(b){let e,i,n,t,o,_,c,y,W,P,J,N,k,O,I,Y,A,z,K,j,Q,v,Z,ee,te,T,ae,E,oe,S,F;return k=new x({props:{order:"0",$$slots:{default:[le]},$$scope:{ctx:b}}}),I=new x({props:{order:"1",$$slots:{default:[he]},$$scope:{ctx:b}}}),T=new x({props:{order:"2",$$slots:{default:[ce]},$$scope:{ctx:b}}}),E=new x({props:{order:"3",$$slots:{default:[pe]},$$scope:{ctx:b}}}),S=new x({props:{order:"4",$$slots:{default:[fe]},$$scope:{ctx:b}}}),{c(){e=d("div"),i=d("h1"),n=p("Programming"),t=$(),o=d("div"),_=$(),c=d("h3"),y=p("Example Tools from Work"),W=$(),P=d("p"),J=p(`There's a large part of my day-to-day that's considered proprietary
    information, but a few of the tools I've made have been either disclosed as
    patents, or would not be considered proprietary. The consistent theme
    between these and the hobby projects is that I enjoy making tools that make
    life better.`),N=$(),G(k.$$.fragment),O=$(),G(I.$$.fragment),Y=$(),A=d("h3"),z=p("A few public projects"),K=$(),j=d("p"),Q=p("My Github page can be found "),v=d("a"),Z=p("here,"),ee=p(` and I'm happy to talk about any of the projects in there. Here are a few of
    the more recent and interesting ones:`),te=$(),G(T.$$.fragment),ae=$(),G(E.$$.fragment),oe=$(),G(S.$$.fragment),this.h()},l(h){e=u(h,"DIV",{class:!0});var a=m(e);i=u(a,"H1",{class:!0});var q=m(i);n=f(q,"Programming"),q.forEach(r),t=w(a),o=u(a,"DIV",{class:!0}),m(o).forEach(r),_=w(a),c=u(a,"H3",{class:!0});var R=m(c);y=f(R,"Example Tools from Work"),R.forEach(r),W=w(a),P=u(a,"P",{});var B=m(P);J=f(B,`There's a large part of my day-to-day that's considered proprietary
    information, but a few of the tools I've made have been either disclosed as
    patents, or would not be considered proprietary. The consistent theme
    between these and the hobby projects is that I enjoy making tools that make
    life better.`),B.forEach(r),N=w(a),L(k.$$.fragment,a),O=w(a),L(I.$$.fragment,a),Y=w(a),A=u(a,"H3",{class:!0});var C=m(A);z=f(C,"A few public projects"),C.forEach(r),K=w(a),j=u(a,"P",{});var D=m(j);Q=f(D,"My Github page can be found "),v=u(D,"A",{href:!0,target:!0,rel:!0,class:!0});var se=m(v);Z=f(se,"here,"),se.forEach(r),ee=f(D,` and I'm happy to talk about any of the projects in there. Here are a few of
    the more recent and interesting ones:`),D.forEach(r),te=w(a),L(T.$$.fragment,a),ae=w(a),L(E.$$.fragment,a),oe=w(a),L(S.$$.fragment,a),a.forEach(r),this.h()},h(){l(i,"class","small"),l(o,"class","small-divider"),l(c,"class","small"),l(A,"class","small"),l(v,"href","https://github.com/Seth-Rothschild"),l(v,"target","_blank"),l(v,"rel","noopener noreferrer"),l(v,"class","svelte-tb01rb"),l(e,"class","content")},m(h,a){g(h,e,a),s(e,i),s(i,n),s(e,t),s(e,o),s(e,_),s(e,c),s(c,y),s(e,W),s(e,P),s(P,J),s(e,N),M(k,e,null),s(e,O),M(I,e,null),s(e,Y),s(e,A),s(A,z),s(e,K),s(e,j),s(j,Q),s(j,v),s(v,Z),s(j,ee),s(e,te),M(T,e,null),s(e,ae),M(E,e,null),s(e,oe),M(S,e,null),F=!0},p(h,[a]){const q={};a&1&&(q.$$scope={dirty:a,ctx:h}),k.$set(q);const R={};a&1&&(R.$$scope={dirty:a,ctx:h}),I.$set(R);const B={};a&1&&(B.$$scope={dirty:a,ctx:h}),T.$set(B);const C={};a&1&&(C.$$scope={dirty:a,ctx:h}),E.$set(C);const D={};a&1&&(D.$$scope={dirty:a,ctx:h}),S.$set(D)},i(h){F||(H(k.$$.fragment,h),H(I.$$.fragment,h),H(T.$$.fragment,h),H(E.$$.fragment,h),H(S.$$.fragment,h),F=!0)},o(h){V(k.$$.fragment,h),V(I.$$.fragment,h),V(T.$$.fragment,h),V(E.$$.fragment,h),V(S.$$.fragment,h),F=!1},d(h){h&&r(e),X(k),X(I),X(T),X(E),X(S)}}}class ge extends ne{constructor(e){super(),re(this,e,null,de,ie,{})}}export{ge as component};
