"use strict";
{
  const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する。
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
  };

  // 未完了リストから指定の要素を削除。
  const deleteFromIncompleteList = (target) => {
    // const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(target);
  };

  // 未完了リストに追加する関数
  const createIncompleteList = (text) => {
    // div の生成。
    const div = document.createElement("div");
    div.className = "list-row";

    // li タグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button （完了）タグの生成。
    const completeButton = document.createElement("button");
    completeButton.innerText = "お庭でお散歩 🌱";
    completeButton.addEventListener("click", () => {
      // 押された完了ボタンの親タグ (div) を未完了リストから削除。
      deleteFromIncompleteList(completeButton.parentNode);

      // 完了リストに追加する要素。
      const addTarget = completeButton.parentNode;

      // TODO 内容 text を取得。
      const text = addTarget.firstElementChild.innerText;

      // div 以下を初期化。
      addTarget.textContent = null;

      // li タグ生成
      const li = document.createElement("li");
      li.innerText = text;

      // button （完了）タグの生成。
      const backButton = document.createElement("button");
      backButton.innerText = "キャットタワーに戻る 🏰";
      backButton.addEventListener("click", () => {
        // 押された戻すボタンの親タグ (div) を完了リストから削除。
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);

        // テキストを取得。
        const text = backButton.parentNode.firstChild.innerText;
        createIncompleteList(text);
      });

      // div タグの子要素に各要素を設定。
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      // 完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
    });

    // button （削除）タグの生成。
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "ベッドに戻る 🛌";
    deleteButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ (div) を未完了リストから削除。
      deleteFromIncompleteList(deleteButton.parentNode);
    });

    // div タグの子要素に各要素を設定。
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
  };

  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
}
