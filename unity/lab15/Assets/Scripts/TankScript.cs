using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TankScript : MonoBehaviour
{

    public GameObject bashnya;			//объектная переменная для управления башней
    public GameObject stvol; 			//объектная переменная для управления стволом
    float TankMoveSpeed = 0.1f; //для регулирования скорости движения танка
    float RotateSpeed = 1f; 	 //для регулирования скорости вращения башни
    float min = 260f;			 //минимальный угол поворота ствола
    float max = 300f; 			  //максимальный угол поворота ствола

    AudioSource tank; // источник звука
    bool isPlaying = false; // переменная для включения звука

    // Start is called before the first frame update
    void Start()
    {
        tank = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        float z = Input.GetAxis("Vertical");         // клавиши W и S
        if (z != 0)
        {
            //сдвигаемся по оси вдоль взгляда камеры на расстояние TankMoveSpeed*z
            transform.position -= transform.TransformDirection(Vector3.forward * TankMoveSpeed * z);
        }

        float x = Input.GetAxis("Horizontal");    // клавиши A и D
        if (x != 0)
        {
            // поворачиваем на угол x вокруг оси Y
            transform.Rotate(0f, x, 0f);
        }

        float h = Input.GetAxis("Mouse X");
        if (h != 0)
        {
            bashnya.transform.Rotate(0f, h * RotateSpeed, 0f);
        }

        float v = Input.GetAxis("Mouse Y");
        if (v != 0)
        {
            float stvol_angle = Mathf.Clamp(stvol.transform.localEulerAngles.y, min, max);
            stvol.transform.localEulerAngles = new Vector3(0f, 0, stvol_angle);
            stvol.transform.Rotate(0f, 0, -v * RotateSpeed);
        }

        if ((x != 0 || z != 0) && !isPlaying)  // если танк двигается и звук не вкл.      
        {
            isPlaying = true;
            tank.Play();   }
        if (x == 0 && z == 0 && isPlaying) // если танк не двиг. и звук  вкл.
        {   
            isPlaying = false;
            tank.Stop(); 
        } 

    }
}
