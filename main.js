import SDK from 'blocksdk'
const sdk = new SDK({
  width: 600
})

// const sdk = new window.sfdc.BlockSDK()
// console.log(sdk)
// sdk.setContent('Test')
// const assets = document.querySelectorAll('p.asset')
// const selected = document.querySelector('span.selected')

// sdk.setData('Ingelbert')
// sdk.setContent('ingelbert')
// sdk.setSuperContent('ingelbert')

// assets.forEach(asset => {
//   asset.addEventListener('click',e => {
//     const id = e.target.id
//     selected.innerHTML = id
//     sdk.setContent(id)
//     sdk.getContent(content => console.log(content))
//   })
// })
// if (window.self === window.top) {
//   document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder Editor only.';
// } else {
  // var sdk = new BlockSDK();

sdk.getContent(function (content) {
  console.log('hello')
  // var quill = new Quill('#editor-container', {
  //   theme: 'snow'
  // });
  // quill.root.innerHTML = content;
  // function saveText() {
  //   var html = quill.root.innerHTML;
  //   sdk.setContent(html);
  //   sdk.setSuperContent('This is super content: ' + html);

  //   sdk.getData(function (data) {
  //     var numberOfEdits = data.numberOfEdits || 0;
  //     sdk.setData({
  //       numberOfEdits: numberOfEdits + 1
  //     });
  //   });
  // }
  // quill.on('text-change', saveText);
});
// }