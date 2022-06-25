using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Task2 : MonoBehaviour
{
    public Texture texture1;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float dX = Input.GetAxis("Horizontal"); //клавиши: A, D (стрелки: <, >)
        float dZ = Input.GetAxis("Vertical"); //клавиши: W, S (стрелки: ^, вниз)
        transform.Translate(dX, 0, dZ);

        float dXm = Input.GetAxis("Mouse X"); //движение курсора по вертик.
        float dZm = Input.GetAxis("Mouse Y"); ; //движение курсора по гориз.
        transform.Rotate(dXm, 0, dZm);
    }

    void OnCollisionEnter(Collision col)
    {
        col.gameObject.GetComponent<Renderer>().material.mainTexture = texture1;

    }
}
