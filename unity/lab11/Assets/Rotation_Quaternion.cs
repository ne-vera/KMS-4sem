using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotation_Quaternion : MonoBehaviour
{
    // Start is called before the first frame update
    private Quaternion quaternionRight;
    private Quaternion quaternionForward;
    private float angle;

    void Start()
    {
        quaternionForward = Quaternion.AngleAxis(angle, Vector3.right);
        quaternionRight = Quaternion.AngleAxis(angle, Vector3.forward);
    }

    // Update is called once per frame
    /*выполняющий вращение объекта вокруг двух осей X и Z одновременно и независимо: 
•	в новом классе перед методом Start() определить переменную типа Quaternion для фиксации начального поворота (угол и ось поворота) и переменную типа float для значения угла поворота;
•	в методе Start() определить переменную типа Quaternion задав ей начальный поворот объекта (через свойство transform.rotation);
•	в методе Update() задать приращение угла поворота, определить последовательно углы поворота вокруг обеих осей, используя ключевые вектора Vector3.right и соответственно  Vector3.forward, и, наконец, задать общий угол поворота объекта вокруг двух осей за каждый такт выполнения методе Update(). 
•	Расположить рядом два объекта, которые вращаются вокруг осей X и Z одновременно с одинаковыми скоростями, но с использованием разных методов: свойства eulerAngles и Qauternion, задать для них одинаковые пропорции и начальное расположение на сцене, и после запуска Play убедиться, что их вращение различаются.
•	Создать с помощью кватерниона вращение вокруг произвольной оси в 3D-пространстве,  используя полную конструкцию 3D-вектора Vector3(x,y,z), где параметры задают проекции вектора на оси координат (не угол поворота!).
•	Сохранить сцену в проекте.
*/
    void Update()
    {
        angle += 0.5f;
        quaternionForward = Quaternion.AngleAxis(angle, Vector3.right);
        quaternionRight = Quaternion.AngleAxis(angle, Vector3.forward);
        transform.rotation = quaternionForward * quaternionRight;
    }
}
