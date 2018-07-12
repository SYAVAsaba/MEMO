#include <stdio.h>
#include <stdlib.h>

#define MAX 100000

typedef struct {
  int node; 
  int parent; //初期値-1,ノード0対策 
  int depth; //depth = parent->depth + 1
  int k; //childの数
  int *child;
} Tree;

struct Node {
  int key;
  Tree item;
  struct Node *next;
};

typedef struct Node *NodePointer;

/*外部変数*/
NodePointer head;

NodePointer make_1node(int , NodePointer );
NodePointer finditem(int );
NodePointer insert(int ,NodePointer );
NodePointer findnode(int);

int main() {
  int n;
  int id,k=0;
  int i,j;
  int judge_parent=0;
  NodePointer node;
  NodePointer node_tmp;
  
  head = make_1node(0,NULL);
  node = head;
  scanf("%d",&n);
  for(i=0;i<n;i++) {
    /*ノードを小さい方から出力するためにnodeを引数に使う(ハンドアウトはheadの次に入れる)*/
    insert(i,node);
    node=node->next;
    scanf("%d",&id);
    node->item.node = id;
    scanf(" %d",&k);
    node->item.k = k;
    node->item.child = (int *)malloc(k * sizeof(int));
    for(j=0;j<k;j++) {
      scanf(" %d",&(node->item.child[j]));
    }
    /*ここまでで入力完了*/
    /*親検索、childを端から調べる(なんだこれ)*/
    node->item.parent = -1;//初期値-1,ノード0対策
    for(node_tmp=head->next;node_tmp!=NULL;node_tmp=node_tmp->next) {
      //printf("node:%d || node_tmp:%d Child,",node->item.node,node_tmp->item.node);
      for(j=0;j<node_tmp->item.k;j++) {
        //printf("%d ,",node_tmp->item.child[j]);
        if(node_tmp->item.child[j] == node->item.node) {
          node->item.parent = node_tmp->item.node;
          //printf("check");
          judge_parent = 1;
          break;
        }
      }
      //printf("\n");
      if(judge_parent==1) break;
    }
    judge_parent=0; //初期化

    /*深さ決定*/
    if(node->item.parent == -1) node->item.depth = 0;
    else {
      node_tmp = findnode(node->item.parent); //親を検索、node_tmpを親にする
      //printf("node_tmp:%d \n",node_tmp->item.node);
      node->item.depth = (node_tmp->item.depth) + 1; //深さは親の深さに+1したもの
    }

  }

  for(node=head->next;node!=NULL;node=node->next) {
    //printf("node:%d || depth:%d \n",node->item.node,node->item.depth);
    printf("node %d: parent = %d, depth = %d, ",node->item.node,node->item.parent,node->item.depth);
    /*root,internal node,leafの判定、root=親無し、k>0=子持ち*/
    if(node->item.parent == -1) printf("root, ");
    else if(node->item.k > 0) printf("internal node, ");
    else printf("leaf, ");
    printf("[");
    if(node->item.k > 0) {
      for(j=0;j<(node->item.k)-1;j++) printf("%d, ",node->item.child[j]);
      printf("%d",node->item.child[j]);
    }
    printf("]\n");
  }

  return 0;
}

//ノードの作成
NodePointer make_1node(int keydata, NodePointer p) {
	NodePointer n;

	if ((n = (NodePointer)malloc(sizeof(struct Node))) == NULL) {
		exit(1);
	}
	n->key = keydata;
	n->next = p;

}

//ノードの検索
NodePointer finditem(int value) {
	NodePointer n;

	for (n = head; n->next != NULL; n = n->next) {
		if (n->next->key == value) return n;
	}
	return NULL;
}

//depthを調べるために親を求める関数、
NodePointer findnode(int nodekey) {
        NodePointer n;

        for (n = head->next; n != NULL; n = n->next) {
                if (n->item.node == nodekey) return n;
        }
        return NULL;
}


//ノードの挿入
NodePointer insert(int keydata,NodePointer node) {
	NodePointer newnode;

	if (finditem(keydata) == NULL) {
		newnode = make_1node(keydata, node->next);
		node->next = newnode;

		return newnode;
	}
	else {
		return NULL;
	}
}
