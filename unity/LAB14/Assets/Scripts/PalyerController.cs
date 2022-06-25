using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PalyerController : MonoBehaviour
{
    private float movementSpeed = 6;
    private float rotationSpeed = 3;

    void Start() { }

    void Update()
    {

        transform.Translate
            (Input.GetAxis("Horizontal") * movementSpeed * Time.deltaTime, 0,
            Input.GetAxis("Vertical") * movementSpeed * Time.deltaTime);
        transform.Rotate(0, rotationSpeed * Input.GetAxis("Mouse X"), 0);
    }
}
