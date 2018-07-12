/*ノードの使用方法*/

typedef struct {
	int hogehoge;
	}
}Info;

struct Node{
	int key;
	Info Graph;
	struct Node *next;
	/*struct Node *prev;*/ //双方向使うなら
};

typedef Node * NodePointer;

NodePointer make_1node(int , NodePointer );
NodePointer finditem(int );
NodePointer insert(int ,NodePointer ); //普通のリスト作成
NodePointer findnode(int);



/*リスト関係の関数*/
/*外部変数*/
NodePointer head;
//ノードの作成
NodePointer make_1node(int keydata, NodePointer p) {
	NodePointer n;

		exit(1);
	}
	n->key = keydata;
	n->next = p;
        n->prev = p;

}

//ノードの検索
NodePointer finditem(int value) {
	NodePointer n;

	for (n = head; n->next != NULL; n = n->next) {
		if (n->next->key == value) return n;
	}
	return NULL;
}

//ノードの挿入
NodePointer insert(int keydata,NodePointer node) {
	NodePointer newnode;

	if (finditem(keydata) == NULL) {
		newnode = make_1node(keydata, node->next);
		node->next = newnode;
		//双方向ならこの下も
		//newnode->prev = node;
		/*双方向挿入タイプ(伝われ)ならこっち*/
		/*
		newnode->next = node->next;
		if(newnode->next != NULL) newnode->next->prev = newnode;　
		//if文は末尾に挿入する際の時のため、NULLの前にやる必要はない(そもそもNULLの前とか存在しない)
		node->next = newnode;
		newnode->next = node;
		*/

		return newnode;
	}
	else {
		return NULL;
	}
}

//ノードの削除
NodePointer del(int keydata) {
	NodePointer n, delnode;

	if ((n = finditem(keydata)) != NULL) {
		delnode = n->next;
		n->next = delnode->next;
		free(delnode);
		return n;
	}
	else {
		return NULL;
	}
}
