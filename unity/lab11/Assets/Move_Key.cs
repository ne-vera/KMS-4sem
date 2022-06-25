using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move_Key : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    private Vector3 delta_x = new Vector3(0.03f, 0, 0);
    private Vector3 delta_y = new Vector3(0, 0.03f, 0);
    private Vector3 delta_z = new Vector3(0, 0, 0.03f);
    // Update is called once per frame
    void Update()
    {
        /*9.	Создать в проекте четвертую сцену с именем «Движ_клавишами», разместить на ней 3D-объект типа Capsule и добавить к нему скрипт Move_Key, в котором записать программный код в методе Update(), 
         * который обеспечит возможность перемещение по всем осям координат X, Y, Z при нажатии на соответствующие клавиши клавиатуры с помощью конструкции Input.GetKey(KeyCode.Q),
         * когда, например, происходит проверка нажатия на клавишу Q. 
         * Используйте для перемещения вверх-вниз (по оси Y) объекта клавиши W и S, 
         * влево-вправо A и D (по оси X), 
         * а для приближения и отдаления (по оси Z) объекта клавиши Q и E.*/
        
        if (Input.GetKey(KeyCode.W))
        {
            transform.position += delta_y;
        }
        else if (Input.GetKey(KeyCode.S))
        {
            transform.position -= delta_y;
        }

        if (Input.GetKey(KeyCode.A))
        {
            transform.position -= delta_x;
        }
        else if (Input.GetKey(KeyCode.D))
        {
            transform.position += delta_x;
        }

        if (Input.GetKey(KeyCode.Q))
        {
            transform.position += delta_z;
        }
        else if (Input.GetKey(KeyCode.E))
        {
            transform.position -= delta_z;
        }
    }
}
