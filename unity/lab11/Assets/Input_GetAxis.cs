using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Input_GetAxis : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    private Vector3 translate_vector = new Vector3(0, 0, 0);
    private Vector3 rotate_vector = new Vector3(0, 0, 0);
    // Update is called once per frame

    /*10.	Создать в проекте пятую сцену «Константы_движения», в которой разместить куб и создать для него программный код в скрипте Input_GetAxis, обеспечивающий:
•	его перемещение по горизонтали и вглубь с помощью клавиш клавиатуры с использованием конструкции transform.Translate (x, 0, z);
•	значения x и z заданы с помощью созданных в классе двух переменных типа float, которые определяются в методе Update() конструкциями Input.GetAxis("Horizontal") и Input.GetAxis("Vertical") соответственно.
•	его вращение в горизонтальной и вертикальной плоскости с помощью мыши с использованием transform.Rotate(x,y,0); 
•	значения x и y заданы с помощью созданных в классе двух переменных типа float, которые определяются в методе Update() конструкциями Input.GetAxis("Mouse Y") и Input.GetAxis("Mouse X") соответственно. 
•	ограничить вращение объекта мышью по вертикальной оси от 0 до 90 градусов с помощью конструкции Mathf.Clamp(угол, нижн. предел, верх. предел), переопределив с ее помощью угол для вращения по вертикали.
*/
    void Update()
    {
        translate_vector.x = Input.GetAxis("Horizontal");
        translate_vector.z = Input.GetAxis("Vertical");
        transform.Translate(translate_vector);
        rotate_vector.x = Input.GetAxis("Mouse X");
        rotate_vector.y = Input.GetAxis("Mouse Y");
        transform.Rotate(Mathf.Clamp(rotate_vector.x, 0.0f, 90.0f), rotate_vector.y, 0);

    }
}
