/*ノードの使用方法*/

typedef struct {
	int hogehoge;
	}
}Info;

struct Node{
	int key;
	Info Graph;
	struct Node *next;
};

typedef Node * NodePointer;


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
NodePointer insert(int keydata) {
	NodePointer newnode;

	if (finditem(keydata) == NULL) {
		newnode = make_1node(keydata, head->next);
		head->next = newnode;

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
