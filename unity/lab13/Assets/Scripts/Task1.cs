using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Task1 : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        /*Добавить для Capsule компоненту Script, 
         * в которой обеспечивается движение объекта клавишами клавиатуры WASD
         * и движениями курсора мыши по горизонтали на 3D-сцене в плоскости X-Z 
         * с использованием конструк-ции Input.GetAxis(), как это обеспечивалось для куба в работе по Теме 11 и обсуждалось в Лекции 11. */

        float dX = Input.GetAxis("Horizontal"); //клавиши: A, D (стрелки: <, >)
        float dZ = Input.GetAxis ("Vertical"); //клавиши: W, S (стрелки: ^, вниз)
        transform.Translate (dX, 0, dZ);

        float dXm = Input.GetAxis("Mouse X"); //движение курсора по вертик.
        float dZm = Input.GetAxis("Mouse Y"); ; //движение курсора по гориз.
        transform.Rotate (dXm, 0, dZm);
    }

    void OnCollisionEnter(Collision col)
    {
        col.gameObject.GetComponent<Renderer>().material.color = new Color(1, 0, 0);

    }
}
