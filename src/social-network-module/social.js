class social {

  constructor(){
    this.nodes = [] ,
    this.edges = [],
    this.connections = [{ node: "" , connections:[ ]  }]
  }

  addNodes(node) {
     if(this.nodes.includes(node)) {
        console.log(` '${node}' node already exist `)
        return 
     }
     this.nodes.push(node)
  }
  
  addEdges(src, dst) { 
    let edge = src+dst 
     if(!this.nodes.includes(src)) {
        console.log(`please add ${src} node first  `)
        return
     }

     if(!this.nodes.includes(dst)) {
        console.log(`please add ${dst} first `)
        return
     }
      
      if(this.edges.includes(edge)){
        console.log(`${src} and ${dst} already connectd to each other `)
        return
      }

      this.edges.push(edge)
  }


   getConnections(node) {
     

      let all_connected_nodes = this.edges.map((ele) => {  if(ele.includes(node) ){
         let arr =ele.split('').find(item=> item!=node)
         let res = []
         
         for(let val of arr ){
             if(val!=undefined) {
                 res.push(val)
             }
         }
        return   res
        }
      }
      )
  
       

      let f_connection = this.connections.map(ele=>{
         if(ele.node==node) {
             return {
                 node: node , connections:[...ele, ...all_connected_nodes.flat(2).filter(Boolean)  ]
             }
         }else{
             return { 
                ...ele 
             }
         }
      }) 


       this.connections.push(f_connection)
 


}


}




let ntwk = new social()

ntwk.addNodes('A')
ntwk.addNodes('B')
ntwk.addNodes('C')
ntwk.addNodes('V')
ntwk.addNodes('G')

ntwk.addEdges('A' , 'B')
ntwk.addEdges('V' , 'B')
ntwk.addEdges('A' , 'V')
ntwk.addEdges('A' , 'G')
ntwk.getConnections('A')
ntwk.getConnections('B')
ntwk.getConnections('V')
ntwk.getConnections('A')

console.log(ntwk);



