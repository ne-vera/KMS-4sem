using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotation_Rotate : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //выполняющий вращение этого объекта вокруг вертикальной оси Y с использованием метода Rotate() при запуске сцены на выполнение Play.
        transform.Rotate(0, 3, 0);
    }
}
