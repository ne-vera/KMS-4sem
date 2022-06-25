using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotation_Euler : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //вращение объекта вокруг двух осей X и Z одновременно, но вращение будет зависеть от последовательности предыдущих поворотов по осям X и Z. 
        transform.eulerAngles += new Vector3(1f, 0, 1f);

    }
}