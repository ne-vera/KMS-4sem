using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RobotController : MonoBehaviour
{

    private float movementSpeed = 6;

    void Start() { }

    void Update()
    {
        if (Input.GetKey(KeyCode.U))
        {
            transform.position += transform.forward * movementSpeed * Time.deltaTime;
        }
        else if (Input.GetKey(KeyCode.J))
        {
            transform.position -= transform.forward * movementSpeed * Time.deltaTime;
        }
        if (Input.GetKey(KeyCode.H))
        {
            transform.position -= transform.right * movementSpeed * Time.deltaTime;
        }
        else if (Input.GetKey(KeyCode.K))
        {
            transform.position += transform.right * movementSpeed * Time.deltaTime;
        }
    }
}
