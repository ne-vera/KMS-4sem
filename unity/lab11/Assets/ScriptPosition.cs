using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScriptPosition : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //программный код, выполняющий перемещение объекта по оси X (через свойство transform.position и вектор Vector3(x,y,z) 
        //transform.position += new Vector3(0.1f, 0.0f, 0.0f);
        //•	Замедлить (ускорить) движение, изменив шаг добавления координаты с каждым кадром так, чтобы объект исчез за край экрана примерно через 2 секунды. 4
        //transform.position += new Vector3(0.05f, 0.0f, 0.0f);
        //Добавить в код перемещение объекта по другим осям координат с разными скоростями и в разных направлениях.
        //Сохранить сцену в проекте под именем «Движение».
        transform.position += new Vector3(0.05f, 0.1f, 0.2f);
    }
}
